import glob
import os

root_dir = "src/"

for filename in glob.iglob(root_dir + '**/*.png', recursive=True):
    os.system("cwebp -q 100 -lossless {0}.png -o {0}.webp".format(filename[:-4]))