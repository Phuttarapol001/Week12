import { Box, Container, Heading, Text, Card, Flex, Avatar, Badge, Separator } from '@radix-ui/themes';

function Profile() {
    return (
        <Container size="3" py="6">
            <Card>
                <Flex direction="column" gap="4">

                    <Flex align="center" gap="4">
                        <Avatar
                            size="8"
                            radius="full"
                            fallback="PP"
                            color="blue"
                        />
                        <Box>
                            <Heading size="7">ภัทรพล ประจงพร</Heading>
                            <Text size="3" color="gray">นักศึกษาวิศวกรรมคอมพิวเตอร์</Text>
                        </Box>
                    </Flex>

                    <Separator size="4" />
                    <Box> 
                        <Heading size="5" mb="3">
                            About me
                        </Heading>
                        <Text>
                            สวัสดีครับ ชื่อภัทรพล ประจงพร เป็นนักศึกษาที่มีความสนใจด้าน
                            การพัฒนาเว็บไซต์และเทคโนโลยียุคใหม่ ชอบเรียนรู้สิ่งใหม่
                            และพัฒนาทักษะการเขียนโปรแกรมอยู่เสมอ
                        </Text>
                    </Box>

                    <Separator size="4" />

                    <Box>
                        <Heading size="5" mb="3">
                            การศึกษา
                        </Heading>
                        <Card mb="3">
                            <Flex direction="column" gap="2">
                                <Heading size="4">ปริญญาตรี วิศวกรรมศาตรบัณฑิต</Heading>
                                <Text color="gray">สาขาวิศวกรรมคอมพิวเตอร์</Text>
                                <Text color="gray">มหาวิทยาลัยธุรกิจบัณฑิต</Text>
                                <Text size="2" color="gray">2566 - ปัจจุบัน</Text>
                            </Flex>
                        </Card>
                    </Box>
                    <Separator size="4" />

                    <Box>
                        <Heading size="5" mb="3">
                            ทักษะและความสามารถ
                        </Heading>
                        <Flex gap="2" wrap="wrap">
                            <Badge size="2" color="blue">HTML/CSS</Badge>
                            <Badge size="2" color="green">JavaScript</Badge>
                            <Badge size="2" color="purple">TypeScript</Badge>
                            <Badge size="2" color="orange">React</Badge>
                            <Badge size="2" color="cyan">Git</Badge>
                            <Badge size="2" color="pink">Tailwind CSS</Badge>
                            <Badge size="2" color="indigo">Radix UI</Badge>
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        </Container>
    );
}
export default Profile;