#!/bin/bash

#   Sliver Implant Framework
#   Copyright (C) 2019  Bishop Fox
#   This program is free software: you can redistribute it and/or modify
#   it under the terms of the GNU General Public License as published by
#   the Free Software Foundation, either version 3 of the License, or
#   (at your option) any later version.
#   This program is distributed in the hope that it will be useful,
#   but WITHOUT ANY WARRANTY; without even the implied warranty of
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#   GNU General Public License for more details.
#   You should have received a copy of the GNU General Public License
#   along with this program.  If not, see <https://www.gnu.org/licenses/>.


# Path to this plugin
PROTOC="./node_modules/.bin/pbjs"
PROTOC_TS="./node_modules/.bin/pbts"
OUT_DIR="./src"

${PROTOC} \
    --target static-module \
    --path sliver/protobuf \
    --es6 --wrap es6 \
    --out ${OUT_DIR}/proto.js \
    sliver/protobuf/commonpb/common.proto \
    sliver/protobuf/sliverpb/sliver.proto \
    sliver/protobuf/clientpb/client.proto \
    sliver/protobuf/rpcpb/services.proto

${PROTOC_TS} -o ${OUT_DIR}/proto.d.ts ${OUT_DIR}/proto.js