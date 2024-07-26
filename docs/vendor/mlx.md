---
name: mlx
kind: dependency
url: https://ml-explore.github.io/mlx/build/html/index.html
---

# MLX

MLX is Apple's library and tooling which allows for the conversion of model files like safetensors into weights which can run inference on Apple Silicon.

MLX is an umbrella for many tools and packages related to ML models across their lifecycle. Examples for most exist in [apple's mlx github](https://github.com/ml-explore/mlx-examples).

## Useful MLX Commands

### Convert

Convert a model from any hugging face repo name into an mlx compatible set of weights.

Converted model is saved in `./mlx_model/`, configured by `--mlx-path`

```shell
mlx_lm.convert --hf-path mistralai/Mistral-Nemo-Instruct-2407 -q
```

### Generate

Perform a generation via CLI using an MLX model

```shell
 mlx_lm.generate --model ./mlx_model  --max-tokens=10000  --prompt "Draft a W3C specification on a human specification. Do not omit any details."
 ```

### Server

Starts a local inference server with compatible OpenAPI endpoints for chat using a model

```shell
mlx_lm.server --model ./mlx_model/
```