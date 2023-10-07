import { ProduceSystemController } from '@/lib/@types/produceSystem';
import _ from 'lodash';
import useSWR from 'swr';
import { InventoryController } from '../@types/inventory';
import { prodGetResData } from '../http';

export function useProductSystem(psId: number, interval: number = 0) {
  return useSWR<ProduceSystemController.ListRecords>(`/api/product-system/${psId}/detail`, {
    refreshInterval: interval,
  });
}

export function useVerifyRecord(id?: number) {
  return useSWR<any>(!_.isNil(id) ? `/api/verifyRecord/${id}/detail` : null);
}

export function useInventoryLiteAll(load?: boolean) {
  return useSWR<any[]>(load ? '/api/inventory/all' : null);
}

export function useVerifiers(load?: boolean) {
  return useSWR<any[]>(load ? '/api/verifyRecord/verifiers' : null);
}

export function useProductList(pgNum: number, interval: number = 0) {
  return useSWR<ProduceSystemController.ProduceSystemList>(`/api/product-system/list/?pageNum=${pgNum}&pageSize=10`, {
    refreshInterval: interval,
  });
}

export function useInventoryList(pgNum: number, interval: number = 0) {
  return useSWR<InventoryController.InventoryList>(`/api/inventory/list/?pageNum=${pgNum}&pageSize=10`, {
    refreshInterval: interval,
  });
}
export function useVerificationList(pgNum: number, interval: number = 0) {
  return useSWR<VerificationManagementController.ListPage>(`/api/verifyRecord/list/?pageNum=${pgNum}&pageSize=10`, {
    refreshInterval: interval,
  });
}

export function useTags(pgNum: number = 0) {
  return useSWR<SbtTokenController.Records>(`/api/sbt/token/list/?pageNum=${pgNum}&pageSize=999`);
}

export function useTagInfo(vin?: string) {
  return useSWR<SbtTokenController.TagInfo>(vin ? `/api/sbt/token/uuid/${vin}` : null, { fetcher: prodGetResData });
}

export function useSBT(tokenId?: string) {
  return useSWR<SbtTokenController.SbtNftList>(tokenId ? `/api/sbt/token/nft/${tokenId}` : null, {
    fetcher: prodGetResData,
  });
}
