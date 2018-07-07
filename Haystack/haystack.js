function findNeedle(haystack) {
+  // your code here
+  const needle= "needle";
+  for (let i = 0; i < haystack.length; i++){
+    if (haystack[i] === needle){
+      return "found the needle at position " + haystack.indexOf(haystack[i]).toString();
+    }
+  }
+}
