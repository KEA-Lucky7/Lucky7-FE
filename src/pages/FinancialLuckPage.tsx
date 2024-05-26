import { useState } from "react";
import FinancialLuck from "../components/financialLuck/FinancialLuck";

export default function FinancialLuckPage() {
  // 이거 필요해서 넣긴 했는데.. 뭐 때문에 필요한겨?
  const [showFortuneModal, setShowFortuneModal] = useState(false);
  showFortuneModal;

  return <FinancialLuck setShowFortuneModal={setShowFortuneModal} />;
}
