const config = {
    server: {
        secret: process.env.SERVER_SECRET,
        port : process.env.CLIENT_PORT
    },
    rtmp_server: {
        rtmp: {
            port: process.env.RTMP_PORT,
            chunk_size: 60000,
            gop_cache: true,
            ping: 60,
            ping_timeout: 30
        },
        http: {
            port: process.env.SERVER_PORT,
            mediaroot: './server/media',
            allow_origin: '*'
        },
        trans: {
            ffmpeg: process.env.PATH_TO_FFMPEG,
            tasks: [
                {
                    app: 'live',
                    hls: true,
                    hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                    dash: true,
                    dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
                }
            ]
        }
    }
};

module.exports = config;
