def main(ctx):
    return {
        "kind": "pipeline",
        "type": "kubernete"
        "name": "Minsky Landing Complete Update",
        "steps": [
            {
                "name": "build",
                "image": "alpine",
                "commands": [
                    "echo hello world"
                ]
            }
        ]
    }