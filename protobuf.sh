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
PROTOC="./node_modules/.bin/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
OUT_DIR="./src/pb"

${PROTOC} \
    -I ./sliver/protobuf/ \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    sliver/protobuf/commonpb/common.proto

${PROTOC} \
    -I ./sliver/protobuf/ \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    sliver/protobuf/sliverpb/sliver.proto

${PROTOC} \
    -I ./sliver/protobuf/ \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    sliver/protobuf/clientpb/client.proto

${PROTOC} \
    -I ./sliver/protobuf \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_out="service=grpc-node:${OUT_DIR}" \
    --grpc_out="generate_package_definition:${OUT_DIR}" \
    sliver/protobuf/rpcpb/services.proto

sed -i '' 's/\"grpc\"/\"\@grpc\/grpc-js\"/1' ${OUT_DIR}/rpcpb/services_grpc_pb.d.ts