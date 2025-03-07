import React, { forwardRef, Ref, RefObject, useEffect, useImperativeHandle, useState } from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'

let refs: RefObject<LoadingModalRef>

export interface LoadingModalRef {
  show: () => void,
  hide: () => void
}

export const showLoading = () => {
  console.log('Jump heree', refs);

  refs?.current?.show();
}

export const hideLoading = () => {
  refs?.current?.hide();
}

function Loading({ }, ref: Ref<LoadingModalRef>) {

  const [visible, setVisible] = useState(false)

  useImperativeHandle(ref, () => ({
    show,
    hide
  }))

  useEffect(() => {
    if (ref) {
      refs = ref as RefObject<LoadingModalRef>
    }
  }, [ref])

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <Modal transparent visible={visible} onRequestClose={() => { }}>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default forwardRef(Loading)