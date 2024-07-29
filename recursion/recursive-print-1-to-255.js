function print1To255(i = 1) {
  if (i > 255) {
    return;
  }

  console.log(i);

  return print1To255(i + 1);
}

print1To255();
