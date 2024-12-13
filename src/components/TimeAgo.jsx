import React from "react";
import { formatDistanceStrict } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  return (
    <div>
      <p className="text-[11px] text-slate-400">
         {formatDistanceStrict(new Date(timestamp), new Date(), { addSuffix: true })}
      </p>
    </div>
  );
};

export default TimeAgo;
