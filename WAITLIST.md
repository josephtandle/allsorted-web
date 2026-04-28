# All Sorted Waitlist

## Storage

- **Backend:** Supabase
- **Project:** `vthjaejffmicevfrickp` (existing MyOS project)
- **Table:** `waitlist`
- **URL:** https://supabase.com/dashboard/project/vthjaejffmicevfrickp/editor

### Table Fields

| Field | Type | Notes |
|-------|------|-------|
| id | uuid | auto-generated |
| first_name | text | required |
| email | text | required, unique |
| source | text | default: `all-sorted` |
| created_at | timestamptz | auto-generated |
| synced_to_crm | boolean | default false, set true after CRM sync |

## API Endpoint

- **Path:** `/api/waitlist`
- **Method:** POST
- **Body:** `{ "firstName": "...", "email": "..." }`
- **Response (success):** `{ "success": true }`
- **Response (error):** `{ "error": "..." }`
- **Duplicate emails:** Returns 200 silently (no email enumeration)

## Vercel Environment Variables

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | `https://vthjaejffmicevfrickp.supabase.co` |
| `SUPABASE_SERVICE_KEY` | Service role JWT (set in Vercel dashboard) |

## CRM Sync

**Script:** `~/.myos/workspace/scripts/sync-allsorted-waitlist.js`

**Cron:** Every 30 minutes via local crontab

**What it does:**
- Fetches rows where `synced_to_crm = false`
- Upserts into local `crm.db` (`crm_contacts` table)
- Sets `source_first` and `source_latest` to `all-sorted`
- Assigns label `custom.all-sorted` ("All Sorted") in `crm_contact_wix_labels`
- Marks rows `synced_to_crm = true` in Supabase

**Log:** `~/.myos/workspace/logs/sync-allsorted-waitlist.log`

## Setup Date

2026-04-13 (migrated from Airtable)
