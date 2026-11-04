import { api } from "@/lib/api";
import type { CallSummary, CallSummaryParams } from "@/types/calls";

export const callsService = {
  async summary(params: CallSummaryParams = {}) {
    const { data } = await api.get<CallSummary>("/calls/summary/", { params });
    return data;
  },
};
