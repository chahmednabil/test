{"operationName":"FileCreateMutation","variables":{"input":[{"originalSource":"https://raw.githubusercontent.com/tigranbs/test-heic-images/master/image1.json","contentType":"IMAGE"}]},"query":"mutation FileCreateMutation($input: [FileCreateInput!]!) {\n  fileCreate(files: $input) {\n    files {\n      alt\n      ... on GenericFile {\n        id\n        createdAt\n        __typename\n      }\n      ... on MediaImage {\n        id\n        createdAt\n        __typename\n      }\n      ... on Video {\n        id\n        createdAt\n        __typename\n      }\n      __typename\n    }\n    userErrors {\n      code\n      field\n      message\n      __typename\n    }\n    __typename\n  }\n}\n"}
