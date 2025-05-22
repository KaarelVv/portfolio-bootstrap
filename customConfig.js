export default async function injectCustomConfig(baseConfig) {
    return {
        ...baseConfig,
        define: {
            ...(baseConfig?.define ?? {}),
            'process.env.CUSTOM_VAR': '"value"',
        }
    };
}
