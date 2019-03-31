#!/bin/bash

export MIX_ENV=prod
export PORT=4797

echo "Stopping old copy of app, if any..."

_build/prod/rel/task_tracker_spa/bin/task_tracker_spa stop || true

echo "Starting app..."

_build/prod/rel/task_tracker_spa/bin/task_tracker_spa foreground
