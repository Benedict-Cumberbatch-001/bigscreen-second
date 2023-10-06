import struct

def split_list_into_segments(data_list, n):
    if n <= 0:
        raise ValueError("n 必须大于等于 1")

    segment_size = len(data_list) // n
    remainder = len(data_list) % n

    segments = []
    start = 0

    for i in range(1, n + 1):
        end = start + segment_size + (1 if i <= remainder else 0)
        segment = data_list[start:end]
        segments.append(segment)
        start = end

    return segments




# 二进制文件名
file_name = 'DUT2017-09-05_21-43-22355.wzd'

# 打开二进制文件以二进制读取模式
with open(file_name, 'rb') as file:
    # 读取文件内容
    binary_data = file.read()

# 定义格式字符串
format_string = 'i11siffii' + 'ff' * 4001+'i11siffii' + 'ff' * 4001+'i11siffii' + 'ff' * 4001+'i11siffii' + 'ff' * 4001+'i11siffii' + 'ff' * 4001+'i11siffii' + 'ff' * 4001

# 计算每组数据的字节数
data_size = struct.calcsize(format_string)

# 解包数据并进行小数位数舍入
data_list = []
for i in range(0, len(binary_data), data_size):
    data = struct.unpack(format_string, binary_data[i:i + data_size])
    # 将浮点数舍入到6位小数
    rounded_data = [round(value, 6) if isinstance(value, float) else value for value in data]
    data_list.append(rounded_data)
# print(data_list[0])

list=data_list[0]

n = 6
result = split_list_into_segments(list, n)
#
# print(result[0],'\n\n')
print(result[1],'\n\n')
# print(result[2],'\n\n')
# print(result[3],'\n\n')
# print(result[4],'\n\n')
# print(result[5],'\n\n')





# print(data_list[1])
# print(1)
# 输出解包后的数据（这里只打印了前两组数据）
# for data in data_list[:3]:
#
#     print(data)
#     print('\n')
