package mainPackage.elexonRestService;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@SpringBootTest
@RunWith(JUnit4.class)
public class ElexonServiceTest {

    @Mock
    private ElexonRestRepository elexonRestRepository;

    @InjectMocks
    private ElexonService elexonService;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }


    @Test
    public void updateElexonValues() {
        elexonService.updateElexonValues();
        verify(elexonRestRepository, times(1)).callElexon();
    }
}
