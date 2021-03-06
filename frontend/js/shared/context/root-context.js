import React from 'react'
import PropTypes from 'prop-types'
import { ApplicationProvider } from './application-context'
import { EditorProvider } from './editor-context'
import createSharedContext from 'react2angular-shared-context'
import { ChatProvider } from '../../features/chat/context/chat-context'

export function ContextRoot({
  children,
  editorLoading,
  chatIsOpenAngular,
  setChatIsOpenAngular,
  openDoc,
  onlineUsersArray
}) {
  return (
    <ApplicationProvider>
      <EditorProvider
        loading={editorLoading}
        chatIsOpenAngular={chatIsOpenAngular}
        setChatIsOpenAngular={setChatIsOpenAngular}
        openDoc={openDoc}
        onlineUsersArray={onlineUsersArray}
      >
        <ChatProvider>{children}</ChatProvider>
      </EditorProvider>
    </ApplicationProvider>
  )
}

ContextRoot.propTypes = {
  children: PropTypes.any,
  editorLoading: PropTypes.bool,
  chatIsOpenAngular: PropTypes.bool,
  setChatIsOpenAngular: PropTypes.func.isRequired,
  openDoc: PropTypes.func.isRequired,
  onlineUsersArray: PropTypes.array.isRequired
}

export const rootContext = createSharedContext(ContextRoot)
