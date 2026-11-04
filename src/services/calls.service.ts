import { api } from "@/lib/api";
import type { CallListParams, CallListResponse, CallSummary, CallSummaryParams } from "@/types/calls";

export const callsService = {
  async list(params: CallListParams = {}) {
    const { data } = await api.get<CallListResponse>("/calls/", { params });
    return data;
  },

  async summary(params: CallSummaryParams = {}) {
    const { data } = await api.get<CallSummary>("/calls/summary/", { params });
    return data;
  },
};
