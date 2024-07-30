import { Resend } from 'resend'

const getResendKey = () => process.env.RESEND_SECRET

export const resend = new Resend(getResendKey())
