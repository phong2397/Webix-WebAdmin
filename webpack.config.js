2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
var path = require("path");
var webpack = require("webpack");
module.exports = function(env) {
    var pack = require("./package.json");
    var MiniCssExtractPlugin = require("mini-css-extract-plugin");
    var production = !!(env && env.production === "true");
    var asmodule = !!(env && env.module === "true");
    var standalone = !!(env && env.standalone === "true");
    var babelSettings = {
        extends: path.join(__dirname, '/.babelrc')
    };
    var config = {
        mode: production ? "production" : "development",
        entry: {
            myapp: "./sources/myapp.js"
        },
        output: {
            path: path.join(__dirname, "codebase"),
            publicPath: "/codebase/",
            filename: "[name].js",
            chunkFilename: "[name].bundle.js"
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    use: "babel-loader?" + JSON.stringify(babelSettings)
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    use: "url-loader?limit=25000"
                },
                {
                    test: /\.(less|css)$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
                }
            ]
        },
        stats: "minimal",
        resolve: {
            extensions: [".js"],
            modules: ["./sources", "node_modules"],
            alias: {
                "jet-views": path.resolve(__dirname, "sources/views"),
                "jet-locales": path.resolve(__dirname, "sources/locales")
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
            new webpack.DefinePlugin({
                VERSION: `"${pack.version}"`,
                APPNAME: `"${pack.name}"`,
                PRODUCTION: production,
                BUILD_AS_MODULE: (asmodule || standalone)
            })
        ],
        devServer: {
            stats: "errors-only",
            contentBase: "./public/",
            proxy: {
                "/server": "http://localhost:3000"
            }
        }
    };
    if (!production) {
        config.devtool = "inline-source-map";
    }
    if (asmodule) {
        if (!standalone) {
            config.externals = config.externals || {};
            config.externals = ["webix-jet"];
        }
        const out = config.output;
        const sub = standalone ? "full" : "module";
        out.library = pack.name.replace(/[^a-z0-9]/gi, "");
        out.libraryTarget = "umd";
        out.path = path.join(__dirname, "dist", sub);
        out.publicPath = "/dist/" + sub + "/";
    }
    return config;
}