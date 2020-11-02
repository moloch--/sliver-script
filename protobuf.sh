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
OUT_DIR="./src/pb"
TS_OUT_DIR="./src/pb"

IN_DIR="./sliver/protobuf"

PROTOC="node_modules/.bin/grpc_tools_node_protoc"
PROTOC_GEN_TS="node_modules/.bin/protoc-gen-ts"

mkdir -p "$OUT_DIR"
mkdir -p "$TS_OUT_DIR"


$PROTOC \
    -I ./sliver/protobuf/ \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    sliver/protobuf/commonpb/common.proto

$PROTOC \
    -I ./sliver/protobuf/ \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    sliver/protobuf/sliverpb/sliver.proto

$PROTOC \
    -I ./sliver/protobuf/ \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    sliver/protobuf/clientpb/client.proto


$PROTOC \
    -I=$IN_DIR \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc_out=:$OUT_DIR \
    --ts_out=service=grpc-node:$TS_OUT_DIR \
    $IN_DIR/rpcpb/services.proto

sed -i "" -e \
    "s/require('grpc')/require('@grpc\/grpc-js')/g" \
    "$OUT_DIR/rpcpb/"*

sed -i "" -e \
    "s/from \"grpc\"/from \"@grpc\/grpc-js\"/g" \
    "$TS_OUT_DIR/rpcpb/"*

### Remove eval()'s

sed -i "" -e \
    "s/Function('return this')()/(function(){return this;})()/g" \
    "$TS_OUT_DIR/clientpb/"*

sed -i "" -e \
    "s/Function('return this')()/(function(){return this;})()/g" \
    "$TS_OUT_DIR/commonpb/"*

sed -i "" -e \
    "s/Function('return this')()/(function(){return this;})()/g" \
    "$TS_OUT_DIR/sliverpb/"*
