import { useQuery } from "@tanstack/react-query";
import { callsService } from "@/services/calls.service";
import type { CallSummaryParams } from "@/types/calls";

export function useCallSummary(params: CallSummaryParams = {}) {
  return useQuery({
    queryKey: ["calls", "summary", params],
    queryFn: () => callsService.summary(params),
  });
}
