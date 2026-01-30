document.addEventListener("DOMContentLoaded", function () {

    
    if (document.getElementById('panoramaR')) {
        pannellum.viewer('panoramaR', {
            default: {
                firstScene: "zriceninaR",
                autoLoad: true,
                hfov: 100,
                sceneFadeDuration: 800
            },
            scenes: {
                zriceninaR: {
                    title: "Předhradí",
                    type: "equirectangular",
                    panorama: "jedna.jpg",
                    hotSpots: [
                        { pitch: -2, yaw: 50, type: "scene", text: "Nádvoří", sceneId: "nadvoriR" },
                        { pitch: -2, yaw: 320, type: "scene", text: "Pohled od Jizery", sceneId: "pohled_jizeraR" }
                    ]
                },
                nadvoriR: {
                    title: "Nádvoří",
                    type: "equirectangular",
                    panorama: "dva.jpg",
                    hotSpots: [
                        { pitch: -3, yaw: 290, type: "scene", text: "Předhradí", sceneId: "zriceninaR" },
                        { pitch: -2, yaw: 45, type: "scene", text: "Pohled z Mohelnice", sceneId: "pohled_mohelniceR" }
                    ]
                },
                pohled_mohelniceR: {
                    title: "Pohled z Mohelnice",
                    type: "equirectangular",
                    panorama: "tri.jpg",
                    hotSpots: [
                        { pitch: -2, yaw: 340, type: "scene", text: "Nádvoří", sceneId: "nadvoriR" },
                        { pitch: -2, yaw: 25, type: "scene", text: "Pohled od Jizery", sceneId: "pohled_jizeraR" }
                    ]
                },
                pohled_jizeraR: {
                    title: "Pohled od Jizery",
                    type: "equirectangular",
                    panorama: "ctyri.jpg",
                    hotSpots: [
                        { pitch: -3, yaw: 15, type: "scene", text: "Předhradí", sceneId: "zriceninaR" },
                        { pitch: -2, yaw: 300, type: "scene", text: "Pohled z Mohelnice", sceneId: "pohled_mohelniceR" }
                    ]
                }
            }
        });
    }

    
    if (document.getElementById('panorama')) {
        pannellum.viewer('panorama', {
            default: {
                firstScene: "zricenina",
                autoLoad: true,
                hfov: 100,
                sceneFadeDuration: 800
            },
            scenes: {
                zricenina: {
                    title: "Zřícenina",
                    type: "equirectangular",
                    panorama: "NDN1.jpg",
                    hotSpots: [
                        { pitch: -2, yaw: 50, type: "scene", text: "Nádvoří", sceneId: "nadvori" },
                        { pitch: -2, yaw: 320, type: "scene", text: "Pohled od Jizery", sceneId: "pohled_jizera" }
                    ]
                },
                nadvori: {
                    title: "Nádvoří",
                    type: "equirectangular",
                    panorama: "NDN2.jpg",
                    hotSpots: [
                        { pitch: -3, yaw: 290, type: "scene", text: "Zřícenina", sceneId: "zricenina" },
                        { pitch: -2, yaw: 45, type: "scene", text: "Pohled z Mohelnice", sceneId: "pohled_mohelnice" }
                    ]
                },
                pohled_mohelnice: {
                    title: "Pohled z Mohelnice",
                    type: "equirectangular",
                    panorama: "NDN3.jpg",
                    hotSpots: [
                        { pitch: -2, yaw: 340, type: "scene", text: "Nádvoří", sceneId: "nadvori" },
                        { pitch: -2, yaw: 25, type: "scene", text: "Pohled od Jizery", sceneId: "pohled_jizera" }
                    ]
                },
                pohled_jizera: {
                    title: "Pohled od Jizery",
                    type: "equirectangular",
                    panorama: "NDN4.jpg",
                    hotSpots: [
                        { pitch: -3, yaw: 15, type: "scene", text: "Zřícenina", sceneId: "zricenina" },
                        { pitch: -2, yaw: 300, type: "scene", text: "Pohled z Mohelnice", sceneId: "pohled_mohelnice" }
                    ]
                }
            }
        });
    }

});
