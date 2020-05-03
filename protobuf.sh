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
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

TS_OUT_DIR="./src/pb"
JS_OUT_DIR="./src/pb"

# Directory to write generated code to (.js and .d.ts files)
mkdir -p ${TS_OUT_DIR} && mkdir -p  ${JS_OUT_DIR}

protoc \
    -I sliver/protobuf \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="${TS_OUT_DIR}" \
    sliver/protobuf/commonpb/common.proto

protoc \
    -I sliver/protobuf \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="${TS_OUT_DIR}" \
    sliver/protobuf/sliverpb/sliver.proto

protoc \
    -I sliver/protobuf \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="${TS_OUT_DIR}" \
    sliver/protobuf/clientpb/client.proto

protoc \
    -I sliver/protobuf \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out="import_style=commonjs,binary:${JS_OUT_DIR}" \
    --ts_out="service=grpc-node:${TS_OUT_DIR}" \
    --grpc_out="${TS_OUT_DIR}" \
    sliver/protobuf/rpcpb/services.proto
