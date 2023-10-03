package d209.Idontcare.mission.dto;

import d209.Idontcare.mission.entity.Mission;
import d209.Idontcare.mission.entity.Type;
import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public class MissionDetailInfoDto {

    private Long missionId;

    private String parentName;

    private String childName;

    private String title;

    private Long mount;

    private String message;

    private Type type;

    private String createdAt;


    public static MissionDetailInfoDto toDto(Mission mission) {
        return MissionDetailInfoDto.builder()
                .childName(mission.getChild().getNickName())
                .parentName(mission.getParent().getNickName())
                .title(mission.getTitle())
                .mount(mission.getAmount())
                .message(mission.getAfterMessage() != null ? mission.getAfterMessage() : mission.getBeforeMessage())
                .type(mission.getType())
                .createdAt(mission.getCreatedAt().toString().substring(0,10))
                .build();
    }
}
