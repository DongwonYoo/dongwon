function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
}
function onGeoError() {
  alert("Can't fine you. No wheater for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
