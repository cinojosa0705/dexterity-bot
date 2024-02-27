async function sendEventData(url: string, data: any): Promise<void> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Response Data:", responseData);
  } catch (error) {
    console.error("Error sending event data:", error);
  }
}

const data = [
  {
    blockTime: 1707604568,
    meta: {
      computeUnitsConsumed: 166367,
      err: null,
      fee: 5002,
      innerInstructions: [
        {
          index: 3,
          instructions: [
            {
              accounts: [1, 7, 11, 8, 9, 14, 2, 3, 5, 7, 10, 11, 12],
              data: "eJ3vVttksFLT2pg31bND9N9j2urFbfCVaxpMPgAT3guQvSKffijFv4vB3UxuCHVTuEFhiHWAHDNQyNqQze6jvizrTsUUEUuCwgMgu",
              programIdIndex: 15,
              stackHeight: 2,
            },
            {
              accounts: [1, 10, 12, 8, 9, 14, 2, 3, 5, 7, 10, 11, 12],
              data: "eJ3vVttksFLT2qe3rnmdxDFsnMrfo1YbHihwG2w8emUEgtGFs6VQyXuvhAGrf3bHuE5FouhED5PEsbktQjQigSXa4zHLMNeGTdHzh",
              programIdIndex: 15,
              stackHeight: 2,
            },
            {
              accounts: [1, 2, 3, 8, 9, 14, 2, 3, 5, 7, 10, 11, 12],
              data: "eJ3vVttksFLT2p282mfZWLH33W55hBRGBG3ox3yjAC2uCsRkruSUitWtgLm8bRYviCDYWcvcR9M3zsKTF5LvwodWwiiFgQeGMvk9o",
              programIdIndex: 15,
              stackHeight: 2,
            },
            {
              accounts: [6, 4, 18, 0],
              data: "2WpA9JntxETZ",
              programIdIndex: 17,
              stackHeight: 2,
            },
          ],
        },
      ],
      loadedAddresses: {
        readonly: [],
        writable: [],
      },
      logMessages: [
        "Program ComputeBudget111111111111111111111111111111 invoke [1]",
        "Program ComputeBudget111111111111111111111111111111 success",
        "Program ComputeBudget111111111111111111111111111111 invoke [1]",
        "Program ComputeBudget111111111111111111111111111111 success",
        "Program ComputeBudget111111111111111111111111111111 invoke [1]",
        "Program ComputeBudget111111111111111111111111111111 success",
        "Program FUfpR31LmcP1VSbz5zDaM7nxnH55iBHkpwusgrnhaFjL invoke [1]",
        "Program log: Instruction: ConsumeOrderbookEvents",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuKeURQAAAAAAAAAAAOapAQAAAAAAAAAAAAEAuh3SBQAAAAA=",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuKmURQAAAAAAAAAAABiqAQAAAAAAAAAAAAEAuh3SBQAAAAA=",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuFJruv//////AAAAAEypAQAAAAAAAAAAAAAAuh3SBQAAAAA=",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuFRruv//////AAAAACapAQAAAAAAAAAAAAAAuh3SBQAAAAA=",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuK+URQAAAAAAAAAAANOpAQAAAAAAAAAAAAEAuh3SBQAAAAA=",
        "Program log: social loss per share of 0.000000 x 0.0 shares = 0.0 total social loss applied",
        "Program data: hfo0lmzI440E+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICChlQkTBpgjM6h9iiWtGbwqk81XOK5EZ0Apgz/9kVqvJgAAAAAAAAAAAAAAAAAAAAAStq8IAgAAAA==",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h invoke [2]",
        "Program log: Instruction: Publish",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h consumed 12320 of 1356919 compute units",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h success",
        "Program data: wAlHC4L8m7IE+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICBgxvdAAAAAAICWmAAAAAAAwL+tiQIAAAABoZUJEwaYIzOofYolrRm8KpPNVziuRGdAKYM//ZFaryYOdbr//////wAAAADGqQEAghCTAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuLeURQAAAAAAAAAAALOpAQB0K5MAAAAAAAAAAAAAAAAAAAAAAAAAAADl/p0AAAAAAA==",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICChlQkTBpgjM6h9iiWtGbwqk81XOK5EZ0Apgz/9kVqvJg51uv//////AAAAAMapAQACAAAAAAAAAAAAAAAAAAAAAAE=",
        "Program log: social loss per share of 0.000000 x 71.0 shares = 0.0 total social loss applied",
        "Program data: hfo0lmzI440E+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICDVPV6TXaAmeDyi62h6ASG4PcAaoOBMiud8yQPy6S/IT4CAqwMAAAAAAAAAAAAAAAAM3/LkRQAAAA==",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h invoke [2]",
        "Program log: Instruction: Publish",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h consumed 12320 of 1312476 compute units",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h success",
        "Program data: wAlHC4L8m7IE+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICBg+bVIAgAAAIBKXQUAAAAAwL+tiQIAAAAB1T1ek12gJng8outoegEhuD3AGqDgTIrnfMkD8ukvyE/0dLr//////wAAAADGqQEA6hCTAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuLeURQAAAAAAAAAAALOpAQB0K5MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICDVPV6TXaAmeDyi62h6ASG4PcAaoOBMiud8yQPy6S/IT/R0uv//////AAAAAMapAQAEAAAAAAAAAAAAAAAAAAAAAAE=",
        "Program log: social loss per share of 0.000000 x 107.1 shares = 0.0 total social loss applied",
        "Program data: hfo0lmzI440E+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICAPxZ7f2MWFwXX8ROnODUeLOJm+pSn1STWakaPkxew5kUAxiQUAAAAAAAAAAAAAAACwpON+ugAAAA==",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h invoke [2]",
        "Program log: Instruction: Publish",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h consumed 12320 of 1268006 compute units",
        "Program 5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h success",
        "Program data: wAlHC4L8m7IE+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICBQnalIAgAAAIBKXQUAAAAAIASgiQIAAAABD8We39jFhcF1/ETpzg1HiziZvqUp9Uk1mpGj5MXsOZE2dbr//////wAAAAC9qQEA6A+TAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuLeURQAAAAAAAAAAALOpAQB0K5MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICAPxZ7f2MWFwXX8ROnODUeLOJm+pSn1STWakaPkxew5kTZ1uv//////AAAAAL2pAQAEAAAAAAAAAAAAAAAAAAAAAAE=",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuLGURQAAAAAAAAAAAAWqAQAAAAAAAAAAAAEAuh3SBQAAAAA=",
        "Program data: 8G0D2GduMMME+tOAC9E6LlvFeSf49xsdfwP42yf8z1/7QcH4H8AYYFNPTFVTRC1QRVJQICAgICA74TFNhPUza1NSCQqi7BQYNYzHBgAu9SoM+UEQYGzfuExruv//////AAAAAD2pAQAAAAAAAAAAAAAAuh3SBQAAAAA=",
        "Program DchhQ6g8LyRCM5mnao1MAg3g9twfqBbDmUWgpQpFfn1b invoke [2]",
        "Program log: Entrypoint",
        "Program log: Beginning processing",
        "Program log: Instruction unpacked",
        "Program log: Instruction: Consume Events",
        "Program log: Number of events consumed: 13",
        "Program DchhQ6g8LyRCM5mnao1MAg3g9twfqBbDmUWgpQpFfn1b consumed 2879 of 1238677 compute units",
        "Program DchhQ6g8LyRCM5mnao1MAg3g9twfqBbDmUWgpQpFfn1b success",
        "Program log: sequence: 9644945",
        "Program FUfpR31LmcP1VSbz5zDaM7nxnH55iBHkpwusgrnhaFjL consumed 165893 of 1399550 compute units",
        "Program FUfpR31LmcP1VSbz5zDaM7nxnH55iBHkpwusgrnhaFjL success",
      ],
      postBalances: [
        3662949232, 1002852480, 93264000, 57795840, 1128932880, 93264000,
        2227200, 93264000, 59911680, 1002240, 93264000, 57795840, 57795840, 1,
        0, 1141440, 2449920, 1141440, 0, 1141440,
      ],
      postTokenBalances: [],
      preBalances: [
        3662947234, 1002852480, 93264000, 57795840, 1128932880, 93264000,
        2234200, 93264000, 59911680, 1002240, 93264000, 57795840, 57795840, 1,
        0, 1141440, 2449920, 1141440, 0, 1141440,
      ],
      preTokenBalances: [],
      rewards: [],
      status: {
        Ok: null,
      },
    },
    slot: 247372310,
    transaction: {
      message: {
        accountKeys: [
          "GKhy5XKqnXyWW6tXtsyacBc4p3Jbk9v8rFozESCZFEsY",
          "LSTqd6kXfMcMmVj63TdFfXvwSEYSkQVcT6GrwH4Ki3h",
          "24Ztk8CWzo6UDoRgb1QCBHQDg3rqzki8asi4uNMYPyCL",
          "2zrukXmGsaAkF8FA8NuL1v96FfKTqsmN9gLAyeQ2ug6d",
          "4VBczLH2driBWr7Jtc4rRbY7XH44DxpTUxpvu4KBGMDv",
          "52kDWQ32qyKPssYpCsUJE8NVniATWuds3vSQ1Ej7EskB",
          "8C9Z5XXv6qE9pMKXUr9qbX9u1d1WHGi4oLhVMPuxobCG",
          "BskSvrepUEwV6JcqPKXC3HigaZZoDoDVdFzWcg6Q3RMX",
          "BynVpic3RnEHT6jEe1yFmpswcSuKuf1pfdTGEGGwpaeK",
          "EkfV49Lzy8J38NS3z2aczeVe8B8vzN2TDKuv7Uhj6EZu",
          "FMQ7g5HHnbQRMB9SkV3A7UpY9Z3RSietWiBsqsKpGhMY",
          "G6r9V7nPmWoin6qtbiCKLDRcxxULMHj25AESGvdBkYoh",
          "J1Z1okrBtG7h5JarxdV49bqH26QNeTgTyK8tHwB2pRsN",
          "ComputeBudget111111111111111111111111111111",
          "4uYXT9y1GiMRe4TkUdqjFgQHT26S5DWZuunenmAThb8r",
          "5u8mLVnUSQNSbKdZPNGTfWHGwV5uJh9by5Fa6jb6BP6h",
          "CbVxuLmsad7Esuy2uRb9ujXNy1tNbY9pZfBadKyQLH3P",
          "DchhQ6g8LyRCM5mnao1MAg3g9twfqBbDmUWgpQpFfn1b",
          "Dv7YV5jSuQZv5fxJTGiyYcLmF9vDBiD5kHXzXsYhiXxd",
          "FUfpR31LmcP1VSbz5zDaM7nxnH55iBHkpwusgrnhaFjL",
        ],
        header: {
          numReadonlySignedAccounts: 0,
          numReadonlyUnsignedAccounts: 7,
          numRequiredSignatures: 1,
        },
        instructions: [
          {
            accounts: [],
            data: "3DdGGhkhJbjm",
            programIdIndex: 13,
            stackHeight: null,
          },
          {
            accounts: [],
            data: "7YXqJ7",
            programIdIndex: 13,
            stackHeight: null,
          },
          {
            accounts: [],
            data: "K1FDJ7",
            programIdIndex: 13,
            stackHeight: null,
          },
          {
            accounts: [
              17, 1, 16, 18, 6, 4, 0, 15, 8, 9, 14, 2, 3, 5, 7, 10, 11, 12,
            ],
            data: "FuxCdZ5e83fwoPTU5jqVjm",
            programIdIndex: 19,
            stackHeight: null,
          },
        ],
        recentBlockhash: "DCgHU1jKoaYfgUcJVNKDet2SkdW4V4A25jPz1keTTMj1",
      },
      signatures: [
        "oZFSycNyF8NvrQoYGY1wFtd2SBt22KT4phJMLNhJYZjkujrmjYnqrcuRvns58H4BHe9aCnfaKKstTM8z9GQkKoK",
      ],
    },
    version: "legacy",
  },
];

const url = "http://127.0.0.1:5700/webhook";

sendEventData(url, data);
