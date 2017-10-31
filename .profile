#!/bin/bash

function config {
python - <<END
import json, os;
env = dict(os.environ)
vars = [ "URL", "SCS_BASE" ]
filtered = { var: env[var] for var in vars }
print(json.dumps(filtered))
END
}

OUTPUT=$(config)
echo $OUTPUT > ./public/config.json
