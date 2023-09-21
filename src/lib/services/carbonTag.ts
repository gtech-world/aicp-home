import axios from 'axios';
import { Res } from '../http';
import { authConfig, createUrl, getData } from './verificationManagement';

export async function getCarbonTagList(pgNum: number = 0) {
  const res = await axios.get<Res<SbtTokenController.Records>>(
    createUrl(`/api/sbt/token/list/?pageNum=${pgNum}&pageSize=999`),
    authConfig(),
  );
  return getData(res);
}
