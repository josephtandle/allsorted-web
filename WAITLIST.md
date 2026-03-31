# All Sorted Waitlist — Setup Notes

## Airtable

- **Base:** Personal Container
- **Base ID:** `appMlPbIGYa1Z9Ded`
- **Table:** Waitlist
- **Table ID:** `tblUJGoDMd35GxZEF`
- **Base URL:** https://airtable.com/appMlPbIGYa1Z9Ded

### Table Fields
| Field | Type |
|-------|------|
| First Name | singleLineText (primary) |
| Email | email |
| Signed Up At | dateTime (ISO, UTC) |

### Notes
- The Waitlist table was created inside the existing "Personal Container" base because the Airtable PAT did not have access to list workspaces (required to create a new base via the meta API).
- The table is fully functional — records can be written to it via the API.

## Vercel Environment Variables

Both variables are set on the **production** environment for the `allsorted` project (scope: `newyork1-6840s-projects`):

| Variable | Value |
|----------|-------|
| `AIRTABLE_API_KEY` | `REDACTED-ROTATED-CREDENTIAL` |
| `AIRTABLE_BASE_ID` | `appMlPbIGYa1Z9Ded` |

## API Endpoint

- **Path:** `/api/waitlist`
- **Method:** POST
- **Body:** `{ "firstName": "...", "email": "..." }`
- **Response (success):** `{ "success": true }`
- **Response (error):** `{ "error": "..." }`

## Setup Date

2026-03-28
