import text from '../../../images/textarea/text.svg'
import attach from '../../../images/textarea/attach.svg'
import sticker from '../../../images/textarea/sticker.svg'
import picture from '../../../images/textarea/picture.svg'
import send from '../../../images/textarea/send.svg'

const svgs = [text, attach, sticker, picture, send]

export const icons = new Array(5).fill(svgs).map((svg, i) => ({ key: i, icon: svg[i] }))
