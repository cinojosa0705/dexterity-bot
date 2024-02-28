import { Wallet } from "@coral-xyz/anchor";
import dexterity from "@hxronetwork/dexterity-ts";
import { Keypair, PublicKey } from "@solana/web3.js";
import {
  handleCancelSubscription,
  handleNewSubscription,
} from "./api-utils/subscritionHandler";
import { tradeHandler } from "./api-utils/tradeHandler";

const AppState = new Map<string, any>();

export const app = async () => {
  const keypair = Keypair.fromSecretKey(
    new Uint8Array([
      96, 142, 97, 25, 159, 50, 147, 35, 172, 19, 212, 221, 34, 139, 116, 27,
      24, 3, 8, 225, 144, 75, 206, 247, 79, 35, 146, 157, 241, 38, 141, 103,
      104, 104, 18, 29, 157, 120, 110, 70, 175, 187, 201, 182, 69, 194, 181, 74,
      91, 0, 97, 235, 252, 33, 171, 117, 107, 187, 189, 3, 161, 24, 105, 64,
    ])
  );
  const wallet = new Wallet(keypair);

  const HeliusApiKey = "9b1d1867-7ae5-474d-9359-d2f0916ee6dd";
  const rpc = `https://devnet-rpc.shyft.to?api_key=JUvCRqsUep-u4yk0`;

  const manifest = await dexterity.getManifest(rpc, true, wallet);

  const trg = new PublicKey("3fFWfA1LQ6yBJ9v8xwQXF3tjj6qp1715Jt8BxBDJexAi");
  const trader = new dexterity.Trader(manifest, trg);

  const server = Bun.serve({
    async fetch(req, server) {
      const url = new URL(req.url);
      const { pathname, searchParams } = url;
      let response = new Response(JSON.stringify({ status: 200 }));
      switch (pathname) {
        case "/process-trade":
          response = await tradeHandler(
            req,
            trader,
            AppState.get("copiedTrader"),
            AppState
          );
          break;
        case "/new-subscription":
          response = await handleNewSubscription(
            trader,
            manifest,
            searchParams.get("trg"),
            AppState
          );
          break;
        case "/cancel-subscription":
          response = await handleCancelSubscription(AppState);
          break;
        default:
          break;
      }
      return response;
    },
  });
  console.log(`${server.url}`);
};
