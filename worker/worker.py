import json
from datetime import datetime, timezone
print(json.dumps({"worker": "report-worker", "processed_at": datetime.now(timezone.utc).isoformat()}))
