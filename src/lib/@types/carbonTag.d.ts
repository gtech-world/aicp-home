declare namespace SbtTokenController {
  type Records = Page & {
    records: {
      uuid: string;
      tokenId: number;
      loadName: string;
      proofTime: string;
      verifyUserName: string;
      tokenUrl: string;
    }[];
  };
}
