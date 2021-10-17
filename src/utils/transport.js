import { isPlainObject } from "lodash"
import { ENVS } from "config/constants"

async function fetchWrapper(requestOptions) {
  const { url, body, method, headers, redirect, request } = requestOptions

  let requestBody = body
  let responseHeader
  let status
  let responseUrl

  if (isPlainObject(requestBody) || Array.isArray(requestBody)) {
    requestBody = JSON.stringify(requestBody)
  }

  const options = Object.assign(
    {
      method,
      body: requestBody,
      headers,
      redirect,
    },
    request
  )

  try {
    const response = await fetch(url, options)
    responseHeader = response.headers
    status = response.status
    responseUrl = response.url

    for (const keyAndValue of response.headers) {
      responseHeader[keyAndValue[0]] = keyAndValue[1]
    }
    if (status === 204 || status === 205) {
      return
    }

    let payload = response
    const contentType = response.headers.get("content-type")
    if (/application\/json/.test(contentType)) {
      payload = await response.json()
    } else if (!contentType || /^text\/|charset=utf8$/.test(contentType)) {
      payload = await response.text()
    }
    return {
      status,
      responseUrl,
      responseHeader,
      payload,
    }
  } catch (error_1) {
    if (error_1) throw error_1
  }
}
export const $get = (requestOptions) => {
  return fetchWrapper({ ...requestOptions, method: "GET" })
}
