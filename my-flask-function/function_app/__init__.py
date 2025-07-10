import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    name = req.params.get('name')
    if not name:
        return func.HttpResponse(
            "Please pass a name in the query string.",
            status_code=400
        )
    return func.HttpResponse(f"Hello, {name}!")

