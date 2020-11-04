import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { TOKEN } from '../../lib/constants';
import { updateUserIsReadyApi, updateUserIsLiveApi, updateUserIsApprovedApi } from '../../helpers/apis';
import { SSEContext } from '../../contexts'

function Logout () {
  const { eventSource, setEventSource } = useContext(SSEContext);
  if (eventSource) {
    eventSource.close();
    setEventSource(null);
  }
  updateUserIsReadyApi({isReady: false});
  updateUserIsLiveApi({isLive: false});
  updateUserIsApprovedApi({isApproved: false});
  localStorage.removeItem(TOKEN);
  return (
    <Redirect to={`/login`} />
  );
}

export default Logout;