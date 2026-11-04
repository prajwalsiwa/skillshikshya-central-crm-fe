export interface CallSummaryParams {
  search?: string;
  direction?: string;
  outcome?: string;
  caller?: string;
  notes?: string;
  created_by?: string;
  student?: string;
  lead?: string;
  branch_id?: string;
  call_timestamp__gte?: string;
  call_timestamp__lte?: string;
}

export interface CallSummaryDay {
  date: string;
  calls: number;
  seconds: number;
}

export interface CallSummaryCaller {
  user_id: number | null;
  name: string;
  calls: number;
  seconds: number;
}

export interface CallSummary {
  total_calls: number;
  inbound: number;
  outbound: number;
  total_seconds: number;
  total_formatted: string;
  avg_seconds: number;
  connected_calls: number;
  connect_rate: number;
  by_day: CallSummaryDay[];
  by_user: CallSummaryCaller[];
}
