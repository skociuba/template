import { createSelector } from "reselect"

export const applicationSelector = (state) => state.application || null

export const paramSelector = createSelector(applicationSelector, (app) => {
  const { params } = app?.config | {}
  if (!params) {
    return null
  }
  const result = {
    locale: params.localeCode,
    opUnit: params.opUnit,
    channelId: params.channelId,
    channelCountryCode: params.channelCountryCode,
    channelGroupMemberID: params.channelGroupMemberID,
    channelBusinessLine: params.channelBusinessLine,
    displayTimeZone: params.displayTimeZone,
  }
  return result
})
