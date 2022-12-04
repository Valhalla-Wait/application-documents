import { Alert } from "antd"
import { BidSelectors, useAppSelector } from "store"


export const AlertMessage = () => {
  
  const serverSuccessMsg = useAppSelector(BidSelectors.BidDataSelector)
  const serverErrMsg = useAppSelector(BidSelectors.BidErrSelector)
  
  return(
    <>
    {serverErrMsg && <Alert message={serverErrMsg}  type='error' /> }
    {serverSuccessMsg && <Alert message={serverSuccessMsg} type='success' />}
    </>
  )
}