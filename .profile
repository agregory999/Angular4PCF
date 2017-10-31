#!/bin/bash

function config {
python - <<END
import json, os;
env = dict(os.environ)
vars = [ "URL", "SCS_BASE" ]
filtered = { var: env[var] for var in vars }
print(json.dumps(filtered))
print(os.getenv('VCAP_APPLICATION'))
END
}

OUTPUT=$(config)
echo $OUTPUT > ./public/config.json
