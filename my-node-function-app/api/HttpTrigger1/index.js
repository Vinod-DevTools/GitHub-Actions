module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: "Hello from Node.js 20 Azure Function!"
    };
};

