import React from 'react'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'

export default function Popup(props) {
  const {title, children, openPopup, setOpenPopup} = props
  return (
    <Dialog open={OpenPopup}>
      <DialogTitle>
        <div>title goes here</div>
      </DialogTitle>
      <DialogContent>
        <div>title goes here</div>
      </DialogContent>
    </Dialog>
  )
}
