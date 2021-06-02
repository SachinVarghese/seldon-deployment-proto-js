no_target:
	@echo need target

build_protos:
	cd proto && \
		sh create-protos.sh

proto-gen:
	mkdir -p proto-build/gen/ && \
	protoc -I proto/ --proto_path=proto --js_out=import_style=commonjs,binary:proto-build/gen $$(find proto -iname "*.proto")
