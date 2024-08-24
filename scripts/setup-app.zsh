FIREBASE_RC_FILEPATH=".firebaserc"

if [ ! -n "${VITE_FIREBASE_PROJECT_ID}" ]; then
    echo "VITE_FIREBASE_PROJECT_ID is not set or is empty"
    exit 1
fi

firebaserc="{
  \"projects\": {
    \"default\": \"$VITE_FIREBASE_PROJECT_ID\"
  }
}"

rm -f $FIREBASE_RC_FILEPATH
echo "$firebaserc" >> $FIREBASE_RC_FILEPATH
