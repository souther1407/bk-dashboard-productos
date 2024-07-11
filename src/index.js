import api from "./dependencies/api.js";
import config from "./config/config.js";
api.listen(config.PORT, () => {
  console.log(`escuchando en el puerto ${config.PORT}`);
});
