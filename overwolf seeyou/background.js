overwolf.games.getRunningGameInfo((gameInfo) => {
    if (gameInfo && gameInfo.isRunning) {
        console.log("🎮 Jeu détecté :", gameInfo.title);
    } else {
        console.log("❌ Aucun jeu détecté.");
    }
});

// Connexion WebSocket à Discord via le plugin Overwolf
const rpc = overwolf.extensions.current.getExtraObject("OverwolfDiscordRPC");

if (!rpc) {
    console.error("❌ Impossible de charger OverwolfDiscordRPC !");
} else {
    rpc.setActivity({
        details: "En jeu sur Valorant",
        state: "Partie en cours",
        timestamps: { start: Date.now() },
        assets: {
            large_image: "valorant",
            large_text: "VALORANT"
        }
    }, (res) => {
        if (res.success) {
            console.log("✅ Activité mise à jour sur Discord !");
        } else {
            console.error("❌ Erreur mise à jour Discord:", res.error);
        }
    });
}
