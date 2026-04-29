import { z } from './openapi'

export const NoContentResponse = z.object({}).openapi('NoContent', {
    description: 'Empty response body. Returned with HTTP 204 when an operation is accepted for processing.',
})

export type NoContentResponse = z.infer<typeof NoContentResponse>
