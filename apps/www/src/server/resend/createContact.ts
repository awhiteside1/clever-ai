'use server'
import { resend } from './client'
import { Contact, AUDIENCES } from './types'

export const createContact = async (contact: Contact) => {
  const response = await resend.contacts.create({
    ...contact,
    unsubscribed: false,
    audienceId: AUDIENCES.general,
  })

  if (response.error) throw response.error
  return response.data
}
